import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

// TODO: Create seeds

export default class CreateContentsInitial implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('entity')
      .values('constants')
      .execute();
  }
}
