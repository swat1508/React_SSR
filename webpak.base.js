module.exports={
    module:{
        rules:[
            {
                test : /\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{ 
                    presets:[
                        'react',   
                        'stage-0', //handle async code
                        ['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
};