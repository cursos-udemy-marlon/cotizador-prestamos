import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const {capital, interest, months, total, errorMessage} = props;
    return (
        <View style={styles.container}>
            { total && (
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>Resumen</Text>
                        <DataResult 
                                title="Cantidad Solicitada" 
                                value={capital}
                                />

                        <DataResult 
                                title="Interes" 
                                value={interest}
                                /> 

                         <DataResult 
                                title="Plazos" 
                                value={months}
                                />

                         <DataResult 
                                title="Pago Mensual" 
                                value={total.monthlyFee}
                                /> 

                         <DataResult 
                                title="Total a Pagar" 
                                value={total.totalPayable}
                                />                                           
                     </View>
             ) }
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}


function DataResult(props) {
    const {title, value} = props;

    return ( 
    <View style={styles.value}>
        <Text>{title}</Text>
        <Text>{value}</Text>
    </View>  
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop: 100,
        marginHorizontal: 40
    },
    error : {
        textAlign : 'center',
        color: "#f00",
        fontWeight: 'bold',
        fontSize: 20,
    },
    boxResult : {
        padding: 30,
    },
    title : {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    value : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
})
