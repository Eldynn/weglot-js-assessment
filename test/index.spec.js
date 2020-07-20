const chai = require('chai');
const chaiFiles = require('chai-files');

const findTrendingTopic = require('../src');

chai.use(chaiFiles);
const expect = chai.expect;
const file = chaiFiles.file;

[1, 2, 3, 4].forEach(n => {
  const inputPath = `data/input${n}.txt`;
  const outputPath = `data/output${n}.txt`;

  describe(inputPath, () => {
    it(`should return trending topics contained in ${outputPath}`, async function () {
      this.timeout(5000);

      expect(await findTrendingTopic(inputPath))
        .to.equal(file(outputPath));
    });
  });
});
