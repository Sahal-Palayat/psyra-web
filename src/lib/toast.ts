// Toast utility for global notifications
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

// Toast store
class ToastStore {
  private toasts: Toast[] = [];
  private listeners: ((toasts: Toast[]) => void)[] = [];

  addToast(toast: Omit<Toast, 'id'>) {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      duration: toast.duration ?? 2000,   // 👈 default 2s
      ...toast,
    };
  
    this.toasts.push(newToast);
    this.notifyListeners();
  
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => this.removeToast(id), newToast.duration);
    }
  
    return id;
  }
  

  removeToast(id: string) {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.notifyListeners();
  }

  clearAll() {
    this.toasts = [];
    this.notifyListeners();
  }

  subscribe(listener: (toasts: Toast[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener([...this.toasts]));
  }

  getToasts() {
    return [...this.toasts];
  }
}

export const toastStore = new ToastStore();

// Convenience functions
export const toast = {
  success: (title: string, message?: string, duration?: number) => {
    return toastStore.addToast({ type: 'success', title, message, duration });
  },
  error: (title: string, message?: string, duration?: number) => {
    return toastStore.addToast({ type: 'error', title, message, duration });
  },
  warning: (title: string, message?: string, duration?: number) => {
    return toastStore.addToast({ type: 'warning', title, message, duration });
  },
  info: (title: string, message?: string, duration?: number) => {
    return toastStore.addToast({ type: 'info', title, message, duration });
  },
  dismiss: (id: string) => {
    toastStore.removeToast(id);
  },
  clear: () => {
    toastStore.clearAll();
  },
};
