module.exports = {
    getCurrentScript:() =>{
        this.getParameter = (options) => {
            switch(options.name){
                case 'custscript_dmc_alk_hapikey_ue': 
                return '3168fe8e-1f2e-4248-ad13-51328c987044';            
            }
        }
        return this;
    }    
}