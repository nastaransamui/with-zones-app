import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function Countdown() {
  const { t } = useTranslation('dashboard');
  const [countdown, setCountdown] = useState();
  const [distance, setDistance] = useState(null);
  const { adminAccessToken } = useSelector((state) => state);
  const [openAlertAuth, setOpenAlertAuth] = useState(false);

  const handleClose = () => {};

  useEffect(() => {
    let isMount = true;

    let countDown = setInterval(() => {
      if (isMount && adminAccessToken !== null) {
        
        const expireDate = jwt.verify(
          adminAccessToken,
          process.env.NEXT_PUBLIC_SECRET_KEY,
          (err, user) => {
            if (!err) {
              return new Date(user.exp * 1000).valueOf();
            }
          }
        );
        const now = moment().valueOf();
        setDistance(expireDate - now);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const finalValue = `${t(`Breadcrumb`).countDownMain} ${days} ${t(
          `Breadcrumb`
        ).days} ${hours} ${t(`Breadcrumb`).hours} ${minutes} ${t(
          `Breadcrumb`
        ).minutes} ${seconds} ${t(`Breadcrumb`).seconds}`;
        setCountdown(finalValue);
      }
    }, 1000);

    return () => {
      isMount = false;
      clearInterval(countDown);
    };
  }, [adminAccessToken, distance, t]);
 

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (isNaN(distance) && adminAccessToken !== null) {
        if (!openAlertAuth) setOpenAlertAuth(true);
      }
    }
    return () => {
      isMount = false;
    };
  }, [distance, openAlertAuth, adminAccessToken]);
  return (
    <>
      {openAlertAuth && (
        <AlertAuth
          openAlertAuth={openAlertAuth}
          setOpenAlertAuth={setOpenAlertAuth}
          t={t}
          handleClose={handleClose}
          buttonText='Logout'
          mainText='tokenExpire'
        />
      )}
      {adminAccessToken !== null && distance !== null && !isNaN(distance) && (
        <div>{countdown}</div>
      )}
    </>
  );
}
