import { Embedded, PrimaryKey, Entity, Options } from "@mikro-orm/core";
import { Metadata } from "./partial";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Embedded(() => Metadata)
    metadata: Metadata;

    constructor(metadata: Metadata) {
        this.metadata = metadata;
    }
}

const options: Options = {
    entities: [User, Metadata],
    type: "postgresql",
    dbName: "temp",
    user: "postgres",
    password: "donatas",
};

export default options;
