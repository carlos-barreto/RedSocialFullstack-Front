import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';
import { IsLoggedService } from '../../services/is-logged.service';
import { take, tap } from 'rxjs';


export const authGuard: CanActivateFn = () => {
  const _isLogged = inject(IsLoggedService)
  const router = inject(Router)
  const isValid = _isLogged.isSomethingValid(_isLogged.checkAuth());

  isValid.subscribe(
    (isValid: boolean) => {
      if (isValid) {
        // La respuesta es correcta
        console.log('si',isValid);
        return isValid;
      } else {
        // La respuesta no es correcta
        console.log('no',isValid);
        return isValid;
      }
    },
    error => {
      // Se ha producido un error
      console.log('error');
      return false;
    }
  );
  return isValid?isValid: router.navigate(['/auth']);
};
