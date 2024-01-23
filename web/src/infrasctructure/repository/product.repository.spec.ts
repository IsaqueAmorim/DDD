import { Sequelize } from "sequelize-typescript";

describe("Product repository tests", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            models: [__dirname + "/../../domain/entity"]
        });
        await sequelize.sync({ force: true });
    });

    afterEach(async () => {
        await sequelize.close();
    });
});