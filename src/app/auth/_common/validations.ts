import { FormGroup } from '@angular/forms';

export function confirmPasswordMatch(group: FormGroup) {
  const password = group.get('password').value;
  const confPassword = group.get('confirmPassword').value;

  if (password === confPassword) {
    return null;
  } else {
    return { notMatch: true };
  }
}
