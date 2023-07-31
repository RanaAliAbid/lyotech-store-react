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
        position = 'top-end',
        showConfirmButton = true,
    }: SweetAlertOptions & { show: boolean, callback?: any }) {

    const swalProps = {
        show: show,
        title: title,
        text: text,
        toast: toast,
        position: position,
        timerProgressBar: timerProgressBar,
        showConfirmButton: showConfirmButton,
        timer: (timerProgressBar) ? timer : 0
    };

    return (
        <SweetAlert2 {...swalProps} />
    );
};