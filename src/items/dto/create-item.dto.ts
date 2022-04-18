/// A DTO (Data Transfer Object) is an object that determines how the data will be sent over the network.
// Since we are using Typescript, we could use a simple ts interface to determine the DTO schema...
/// However, since typescript interfaces are removed during transpilation, nest can't refer to them at runtime.
// therefore, Nest is recomending we use classes instead.
export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly qty: number;
}
