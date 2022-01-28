function status(req, res){
    console.log('llegue a la funcion');
    res.status(200).json({
        messages:'ALIVE',
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage()
    })
}

module.exports = {status};