async function enviarScript(scriptText) {
    const lines = scriptText.split('\n').map(line => line.trim()).filter(line => line);

    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) {
        throw new Error("Não há uma conversa aberta");
    }

    for (const line of lines) {
        console.log(line);
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        await new Promise(resolve => setTimeout(resolve, 100));

        const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
        sendButton.click();

        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }

    return lines.length;
}

const script = `
♪ Glória do desporto nacional ♪
♪ Oh, Internacional ♪
♪ Que eu vivo a exaltar ♪
♪ Levas a plagas distantes ♪
♪ Feitos relevantes ♪
♪ Vives a brilhar ♪

♪ Correm os anos, surge o amanhã ♪
♪ Radioso de luz, varonil ♪
♪ Segue a tua senda de vitórias ♪
♪ Colorado das glórias ♪
♪ Orgulho do Brasil ♪

♪ É teu passado alvirrubro ♪
♪ Motivo de festas em nossos corações ♪
♪ O teu presente diz tudo ♪
♪ Trazendo à torcida alegres emoções ♪
♪ Colorado de ases celeiro ♪

♪ Teus astros cintilam num céu sempre azul ♪
♪ Vibra o Brasil inteiro ♪
♪ Com o clube do povo do Rio Grande do Sul ♪

♪ Glória do desporto nacional ♪
♪ Oh, Internacional ♪
♪ Que eu vivo a exaltar ♪
♪ Levas a plagas distantes ♪
♪ Feitos relevantes ♪
♪ Vives a brilhar ♪

♪ Correm os anos, surge o amanhã ♪
♪ Radioso de luz, varonil ♪
♪ Segue a tua senda de vitórias ♪
♪ Colorado das glórias ♪
♪ Orgulho do Brasil ♪
`;

enviarScript(script)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
