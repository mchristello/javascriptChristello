// Probando API MercadoPago
const mp = new MercadoPago("APP_USR-6e648661-e2e9-4c63-963e-6d1f95347d5c");

const bricksBuilder = mp.bricks();

const renderCardPaymentBrick = async (bricksBuilder) => {

    const settings = {
        initialization: {
            amount: 100, //valor del pago a realizar
        },
        callbacks: {
            onReady: () => {
                console.log(`El brick está completo`);// callback llamado cuando Brick esté listo
            },
            onSubmit: (cardFormData) => {
                // callback llamado cuando el usuario haga clic en el botón enviar los datos

                // ejemplo de envío de los datos recolectados por el Brick a su servidor
                return new Promise((resolve, reject) => {
                    fetch("/process_payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringifsy(cardFormData)
                        })
                        .then((resolve) => {
                            // recibir el resultado del pago
                            resolve();
                        })
                        .catch((reject) => {
                            // tratar respuesta de error al intentar crear el pago
                            reject();
                        })
                });
            },
            onError: (error) => {
                // callback llamado para todos los casos de error de Brick
            },
        },
    };
    const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};
renderCardPaymentBrick(bricksBuilder);