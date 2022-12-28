import { Property } from "@mikro-orm/core";
import { Unique } from "@mikro-orm/core";
import { Embeddable } from "@mikro-orm/core";
import { Entity } from "@mikro-orm/core";

@Embeddable()
export class Metadata {
    @Property({ type: "text", unique: true })
    slug: string = "a";
}
