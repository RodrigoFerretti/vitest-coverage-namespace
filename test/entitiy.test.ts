import { Entity } from "../src/entity";

describe("entity test", () => {
  it("Should safe parse successfully", () => {
    const entity: Entity = {
      id: 1,
      name: "entity",
      status: "active",
      subEntity: {
        id: 1,
        name: "subEntity",
      },
    };

    const result = Entity.schema.safeParse(entity);

    expect(result.success).toBeTruthy();
  });

  it("Should safe parse with error", () => {
    const notEntity = {
      id: 1,
      name: "entity",
      status: "atcive" as any,
    };

    const result = Entity.schema.safeParse(notEntity);

    expect(result.success).toBeFalsy();
  });
});
