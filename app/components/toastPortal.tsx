"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Toast from '@/components/toast';
import { ToastMessage } from '@/customTypes/toast';

interface ToastPortalProps {
  toasts: ToastMessage[],
  removeToast: (id: string) => void
}

export default function ToastPortal({
  toasts,
  removeToast
}: ToastPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(
    <div className="toast-container" aria-live="assertive">
      {toasts.map((toast: ToastMessage) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          message={toast.message}
          type={toast.type}
          onRemove={removeToast}
        />
      ))}
    </div>,
    document.querySelector('#main')!
  ) : null;
};