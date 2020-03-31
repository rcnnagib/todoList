import { HttpErrorResponse } from '@angular/common/http';
import { throwError} from 'rxjs';

export class ErrorHandler{
    static handleError(errorResponse: HttpErrorResponse){
        let responseMessage
        if (errorResponse.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            responseMessage = `An error occurred:${errorResponse.error.message}`
            console.error(responseMessage);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            responseMessage = `A api retornou com o codigo ${errorResponse.status}. Retorno: ${errorResponse.error}`
            console.error(responseMessage,responseMessage)
        }
        return throwError(responseMessage);
    }
}