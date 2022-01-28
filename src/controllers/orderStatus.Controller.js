function status(req, res){
    console.log('llegue a la funcion');
    res.status(200).json({
        messages:'orderStatusRoute',
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage()
    })
}

function tester() {
    return "hello";
}

module.exports = {status, tester};