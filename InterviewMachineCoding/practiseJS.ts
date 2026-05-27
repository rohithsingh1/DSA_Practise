// class DBConnection {
//     private static instance: DBConnection
//     private constructor () {
//         // Prevent creating a new instance if one already exists
//         if (DBConnection.instance) {
//             throw new Error("Use DBConnection.getInstance() instead of 'new'.");
//         }
//     }
//     static getInstance(): DBConnection {
//         if (!DBConnection.instance) {
//             DBConnection.instance = new DBConnection()
//         }
//         return DBConnection.instance
//     }
// }

// // const dbConnObj1 = DBConnection.getInstance()
// // const dbConnObj2 = DBConnection.getInstance()
// // // const dbConnObj3=DBConnection.getInstance()
// // // const dbConnObj4=new DBConnection()
// // //const dbConnObj5=new DBConnection()
// // console.log('dbConnObj1>>>>', dbConnObj1 === dbConnObj2)



// class Counter {
//     private count: number = 0;
//     private static instance: Counter

//     private constructor () {
//         if (Counter.instance) {
//             throw new Error("Use Counter.getInstance() instead of 'new'.");
//         }
//     }

//     increment(): void {
//         // TODO: Increment count
//         this.count = this.count + 1
//     }

//     getCount(): number {
//         // TODO: Return current count
//         return this.count;
//     }

//     static getInstance(): Counter {
//         if (!Counter.instance) {
//             Counter.instance = new Counter()
//         }
//         return Counter.instance
//     }
// }


// const c1 = Counter.getInstance();
// const c2 = Counter.getInstance();
// console.log("Same instance:", c1 === c2);
// for (let i = 0; i < 5; i++) {
//     c1.increment();
// }
// console.log("Count after 5 increments:", c1.getCount());


// class User {
//     private readonly name!: string;
//     private readonly age?: number;
//     private readonly email?: string;
//     private readonly address?: string;
//     constructor (builder: UserBuilder) {
//         this.name = builder.name
//         this.age = builder.age
//         this.email = builder.email
//         this.address = builder.address
//     }

//     userDetails(): void {
//         console.log(`user --> ${this.name} email --> ${this.email} age--> ${this.age}`)
//     }
// }

// class UserBuilder {
//     public name!: string;
//     public age?: number;
//     public email?: string;
//     public address?: string;

//     setName(name: string): UserBuilder {
//         this.name = name
//         return this
//     }

//     setAge(age: number): UserBuilder {
//         this.age = age;
//         return this;
//     }

//     setEmail(email: string): UserBuilder {
//         this.email = email;
//         return this;
//     }

//     setAddress(address: string): UserBuilder {
//         this.address = address;
//         return this;
//     }

//     build(): User {
//         if (!this.name) {
//             throw new Error("Name required");
//         }
//         if (!this.age) {
//             throw new Error("age required");
//         }
//         return new User(this)
//     }
// }

// const user = new UserBuilder()
//     .setName("Rohith")
//     .setAge(24)
//     .setEmail("rohith@gmail.com")
//     .setAddress("Hyderabad")
//     .build();

// user.userDetails()

// console.log(user);




// class DatabaseConfig {
//     private readonly host: string;
//     private readonly port: number;
//     private readonly username?: string;
//     private readonly password?: string;
//     private readonly ssl?: boolean;

//     constructor (builder: DatabaseConfigBuilder) {
//         this.host = builder.host
//         this.port = builder.port
//         this.username = builder.username
//         this.password = builder.password
//         this.ssl = builder.ssl
//     }
// }

// class DatabaseConfigBuilder {
//     public host: string = "localhost";
//     public port: number = 3000;
//     public username?: string;
//     public password?: string;
//     public ssl: boolean = false;

//     setHost(host: string): this {
//         this.host = host;
//         return this;
//     }

//     setPort(port: number): this {
//         this.port = port;
//         return this;
//     }

//     setUsername(username: string): this {
//         this.username = username;
//         return this;
//     }

//     setPassword(password: string): this {
//         this.password = password;
//         return this;
//     }

//     enableSSL(): this {
//         this.ssl = true;
//         return this;
//     }

//     build(): DatabaseConfig {
//         if (!this.host) {
//             throw new Error("Host required");
//         }
//         if (!this.port) {
//             throw new Error("Port required");
//         }
//         return new DatabaseConfig(this);
//     }
// }

// const config = new DatabaseConfigBuilder()
//     .setHost("localhost")
//     .setPort(5432)
//     .setUsername("admin")
//     .setPassword("secret")
//     .enableSSL()
//     .build();

// console.log(config);



interface Prototype<T> {
    clone(): T
}

class Enemy implements Prototype<Enemy> {
    private type!: string
    private health!: number
    private weapons!: string[]

    private constructor (builder?: InstanceType<typeof Enemy.Builder>) {
        console.log('Enemy class constructor called>>>>>>')
        if (builder) {
            const enemyDetailsObj = builder.getEnemyDeatils()
            this.type = enemyDetailsObj.type
            this.health = enemyDetailsObj.health
            this.weapons = enemyDetailsObj.weapons
        }
    }

    setEnemyType(type: string): void {
        this.type = type
    }

    setEnemyWeapons(weapons: string): void {
        this.weapons.push(weapons)
    }

    clone(): Enemy {
        const clonedEnemy = new Enemy();
        clonedEnemy.type = this.type
        clonedEnemy.health = this.health;
        // Deep copy the array so the clone doesn't share the same weapons reference!
        clonedEnemy.weapons = [ ...this.weapons ];
        return clonedEnemy
    }

    static Builder = class EnemyBuilder {
        private type!: string
        private health!: number
        private weapons: string[] = []

        setEnemyType(type: string): EnemyBuilder {
            this.type = type
            return this
        }

        setEnemyHealth(health: number): EnemyBuilder {
            this.health = health
            return this
        }

        setEnemyWeapons(weapons: string): EnemyBuilder {
            this.weapons.push(weapons)
            return this
        }

        getEnemyDeatils() {
            return {
                type: this.type,
                health: this.health,
                weapons: this.weapons
            }
        }

        build(): Enemy {
            return new Enemy(this)
        }
    }
}


const zombiePrototype = new Enemy.Builder()
    .setEnemyType("Zombie")
    .setEnemyHealth(100)
    .setEnemyWeapons("Claws")
    .build()

const zombie1 = zombiePrototype.clone()
const zombie2 = zombiePrototype.clone()
zombie1.setEnemyWeapons("knife")

console.log(zombiePrototype);
console.log(zombie1);
console.log(zombie2);
console.log("zombiePrototype === zombie1>>>>>", zombiePrototype === zombie1)
console.log("zombiePrototype === zombie2>>>>>", zombiePrototype === zombie2)
console.log("zombie2 === zombie1>>>>>", zombie2 === zombie1)


interface Prototype<T> {
    clone(): T
}

class EmailService implements Prototype<EmailService> {
    send(message: string) {
        console.log("Email:", message);
    }

    clone(): EmailService {
        return new EmailService()
    }
}

class SMSService implements Prototype<SMSService> {
    send(message: string) {
        console.log("SMS:", message);
    }

    clone(): SMSService {
        return new SMSService()
    }
}

class ServiceRegistory {
    private services = new Map<string, Prototype<any>>()

    register(name: string, service: Prototype<any>): void {
        this.services.set(name, service)
    }

    get(name: string) {
        const service = this.services.get(name)
        if (!service) {
            throw new Error(
                "Service not found"
            );
        }
        return service.clone()
    }
}

const registry = new ServiceRegistory();

registry.register("email", new EmailService())
registry.register("sms", new SMSService())

const emailService = registry.get("email");
const emailService1 = registry.get("email");

emailService.send("Hello Rohith");
console.log("emailService === emailService1>>>>>>", emailService === emailService1)
