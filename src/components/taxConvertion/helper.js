export const helperConversor =  (tipo, interes, periodo) => {
    if (tipo === 1){
        return {
            'status': 200,
            'resultado': ((1 + (interes/periodo)) ** periodo) - 1, 
            'incial': 'CONVERSION DE INTERES NOMINAL VENCIDO A EFECTIVO ANUAL',
            'concepto': 'Interes efectivo anual'
            }
    }

    if (tipo === 2){
        return {
            'status': 200,
            'resultado': (1 / ((1 - (interes/periodo)) ** periodo) - 1), 
            'incial': 'CONVERSION DE INTERES NOMINAL ANTICIPADO A EFECTIVO ANUAL',
            'concepto': 'Interes efectivo anual'
            }
    }   

    if (tipo === 3){
        return {
            'status': 200,
            'resultado': ((1+interes) ** (1/periodo) - 1) * periodo, 
            'incial': 'CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL VENCIDO',
            'concepto': 'Interes nominal vencido'
            }
    }

    if (tipo === 4){
        return {
            'status': 200,
            'resultado': (1-(1/(1+interes)) ** (1/periodo)) * periodo, 
            'incial': 'CONVERSION DE INTERES EFECTIVO ANUAL A NOMINAL ANTICIPADO',
            'concepto': 'Interes nominal anticipado'
            }
    }

}