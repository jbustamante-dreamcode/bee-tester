function add(numA, numB){
    return numA+numB;
}

function status(req, res){
    res.status(200).json({
        messages:'ALIVE',
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage()
    })
}

module.exports = {status, add};