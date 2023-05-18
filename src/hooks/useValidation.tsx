import React, { useState } from 'react';

interface ValidationResult {
  valid: boolean;
  message: string;
}

const UID_CHECK = /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/;
const PW_CHECK = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[A-Z])(?=.*[a-z\d])[A-Za-z][A-Za-z\d]*$/;

const uidValidation = (uid: string): ValidationResult => {
  if (uid.length === 0) {
    return { valid: false, message: '이메일을 입력해 주세요' };
  } else if (!UID_CHECK.test(uid)) {
    return { valid: false, message: '이메일 형식으로 입력해주세요' };
  } else return { valid: true, message: '' };
};

const pwValidation = (pwd: string): ValidationResult => {
  if (pwd.length === 0) {
    return { valid: false, message: '비밀번호를 입력해주세요' };
  } else if (!PW_CHECK.test(pwd)) {
    return { valid: false, message: '비밀번호 형식으로 입력해주세요' };
  } else return { valid: true, message: '' };
};

export default function useValidation() {
  const [uid, setUid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [uidErrMsg, setUidErrMsg] = useState<null | string>(null);
  const [pwdErrMsg, setPwdErrMsg] = useState<null | string>(null);

  const uidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const uidCheck = uidValidation(value);

    setUid(value);
    setUidErrMsg(uidCheck.message);
  };

  const pwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const pwCheck = pwValidation(value);

    setPassword(value);
    setPwdErrMsg(pwCheck.message);
  };

  const user = { uid: uid, password: password };
  const errMsg = { uid: uidErrMsg, pwd: pwdErrMsg };

  return { user, uidChange, pwChange, errMsg };
}
