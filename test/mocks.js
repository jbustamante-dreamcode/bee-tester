const rewiremock= require ('rewiremock').default;

function globalmock (){
    rewiremock('express').with({
        Router: () =>{
            return{
                use:(expose,route) => {
                    return { route, expose}
                }, 
                route : (expose) => {
                    return {
                        post: (params) =>{
                            return params;
                        },
                        get: (params) =>{
                        return params;
                        },
                    }
                },
                router: (param) => {
                    return param;
                }
            
            }
        }
    });
}

module.exports={globalmock};