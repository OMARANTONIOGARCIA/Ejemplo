export function OnlyLetras (event: any){
    const pattern = /[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]*$/;
    const inputChar = String.fromCharCode(event.charCode);
  
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }

}