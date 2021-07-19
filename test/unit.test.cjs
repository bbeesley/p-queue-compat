const PQueue = require('p-queue-compat').default;
const delay = require('delay');

describe('p-queue-compat', () => {
  it('should work', async () => {
    const queue = new PQueue({ concurrency: 1 });
    const start = Date.now();
    let done = 0;
    queue.add(async () => {
      await delay(1000);
      done++;
    });
    queue.add(async () => {
      await delay(1000);
      done++;
    });
    await queue.onEmpty();
    await queue.onIdle();
    expect(done).toBe(2);
    expect(Date.now() - start).toBeGreaterThan(2000);
  });
});
