import React, { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import { SweetAlertOptions } from 'sweetalert2';

export default function AlertComponent(
    {
        show = false,
        callback,
        title,
        text,
        toast,
        timerProgressBar,
        timer = 3000,
        position = 'bottom-end',
        showConfirmButton = true,
        color = "#fff",
        background = "#013220"
    }: SweetAlertOptions & { show: boolean, callback?: any }) {

    const swalProps = {
        show: show,
        title: title,
        text: text,
        toast: toast,
        color: color,
        background: background,
        position: position,
        timerProgressBar: timerProgressBar,
        showConfirmButton: showConfirmButton,
        timer: (timerProgressBar) ? timer : 0,
        didClose: () => {
            // run when swal is closed...
            if (callback) {
                callback()
            }
        }
    };

    return (
        <SweetAlert2 {...swalProps} />
    );
};