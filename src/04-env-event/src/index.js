exports.handler = async (event, context) => {
    console.log(process.env.Override + process.env.EnvParam);
    return event.EventParam;
};
