var log = (function(){
	var log = "";
	return {
		add: function(msg){ log += msg;},
		show: function(){ alert(log);}
	}
})();

var Participant = function(name){
	this.name = name;
	this.chatroom = null;
}

Participant.prototype = {
	send: function(message, to){
		chatroom.send(message, this, to);
	},
	receive: function(message, from){
		log.add(from.name + " to " + this.name + ": " + message);
	}
}

//Mediator to communicate all participants
var Chatroom = function(){
	var participants = {};
	return {
		register: function(participant){
			participants[participant.name] = participant;
			participant.chatroom = this;
		},
		send: function(message, from, to){
			if (to){
				to.receive(message, from); 
			} else {
				for (key in participants) {   
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
			}
		}
	}
}

var julio = new Participant("Julio");
var claudia = new Participant("Claudia");
var armando = new Participant("Armando");
var cesar = new Participant("Cesar");
var chatroom = new Chatroom();
chatroom.register(julio);
chatroom.register(claudia);
chatroom.register(armando);
chatroom.register(cesar);

julio.send("Hola, buen dia", claudia);
julio.send("Hola a todos!");