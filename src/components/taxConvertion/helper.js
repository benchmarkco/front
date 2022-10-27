export const helperConversor =  (tipo, interes, periodo) => {
    if (tipo === 1){
        return {
            'status': 200,
            'resultado': ((1 + (interes/periodo)) ** periodo) - 1, 
            'incial': 'EFECTIVO ANUAL',
            'concepto': 'Interes efectivo anual'
            }
    }

    if (tipo === 2){
        return {
            'status': 200,
            'resultado': (1 / ((1 - (interes/periodo)) ** periodo) - 1), 
            'incial': 'EFECTIVO ANUAL',
            'concepto': 'Interes efectivo anual'
            }
    }   

    if (tipo === 3){
        return {
            'status': 200,
            'resultado': ((1+interes) ** (1/periodo) - 1) * periodo, 
            'incial': 'NOMINAL VENCIDO',
            'concepto': 'Interes nominal vencido'
            }
    }

    if (tipo === 4){
        return {
            'status': 200,
            'resultado': (1-(1/(1+interes)) ** (1/periodo)) * periodo, 
            'incial': 'NOMINAL ANTICIPADO',
            'concepto': 'Interes nominal anticipado'
            }
    }

}