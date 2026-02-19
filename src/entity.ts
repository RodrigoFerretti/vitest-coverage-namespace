import { z } from "zod";

export namespace Entity.SubEntity {
  export const schema = z.object({
    id: z.int(),
    name: z.string(),
  });
}

export namespace Entity.Status {
  export const schema = z.enum(["active", "inactive"]);
}

export namespace Entity {
  export const schema = z.object({
    id: z.int(),
    name: z.string(),
    status: Status.schema,
    subEntity: SubEntity.schema,
  });
}

export type Entity = z.infer<typeof Entity.schema>;
