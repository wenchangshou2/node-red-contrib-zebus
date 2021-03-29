module.exports = function(RED) {
    function Zebus(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.address = config.address;
        this.name = config.name;
        console.log('zeubs config',config)
    }
    RED.nodes.registerType("zebus",Zebus);
    function ZebusInNode(n){
        RED.nodes.createNode(this,n);
        console.log('nnnnnnnnnnnnn',n)
    }

    RED.nodes.registerType("zebus in",ZebusInNode)
}