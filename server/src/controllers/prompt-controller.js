const openai = require('../config/openai');
const InputPrompt =  require('../models/input-prompt');

module.exports =  {
    async sendText(req, res) {
        console.log('Recebido prompt:', req.body);
        const openaiAPI = openai.configuration();
        console.log('OpenAI API configurada.');
        const inputPrompt = new InputPrompt(req.body);
        console.log('InputPrompt criado:', inputPrompt);

        try {
            const response = await openaiAPI.responses.create(openai.textCompletion({prompt: inputPrompt}));
            res.status(200).json({sucess: true, data: response.data.choices[0].message });

    }
    catch (error) {
        console.error('ERRO Interno : Error communicating with OpenAI API:', error);
        res.status(400).json({sucess: false, error: error.response ? error.response.data : 'ERRO Interno : Error communicating with OpenAI API' });
    }
    },
};