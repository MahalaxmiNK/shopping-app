import { CategoryFormatPipe } from './category-format.pipe';

describe('CategoryFormatPipe', () => {
  let pipe: CategoryFormatPipe;

  beforeEach(() => {
    pipe = new CategoryFormatPipe();
  });

  it('create an instance', () => {
    const pipe = new CategoryFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "example-category" to "Example Category"', () => {
    const input = 'example-category';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toBe('Example Category');
  });
});
