
const CommandCallbackConverter = {

     getState: () => {
        if(typeof CommandCallbackConverter.onGetState === "function") {
            return CommandCallbackConverter.onGetState()
        }
    },

    toggleShowText: () => {
        if(typeof CommandCallbackConverter.onToggleShowText === "function") {
            return CommandCallbackConverter.onToggleShowText()
        }
    },
}

export default CommandCallbackConverter;