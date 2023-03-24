// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, dna) => {
  return {
    specimenNum: num,
    dna,
    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      const value = this.dna[index];
      while (this.dna[index] = value) {
        this.dna[index] = returnRandBase();
      }
    },
    percentOfBases(_bases = mockUpStrand(), compare = false) {
      let bases = [];
      if (compare) {
        for (let i of _bases) {
          bases.push([i]);
        }
      } else {
        for (let i in this.dna) {
          bases.push(_bases);
        }
      }
      let sum = 0;
      let same = 0;
      for (let i in this.dna) {
        sum++;
        for (let j in bases[i]) {
          if (this.dna[i] === bases[i][j]) {
            same++;
            break;
          }
        }
      }
      return same / sum * 100;
    },
    compareDNA(that, quiet = false) {
      if (!quiet) {
        console.log(`specimen #${this.specimenNum} and specimen #${that.specimenNum} have ${this.percentOfBases(that.dna, compare = true)}% DNA in common`);
      }
      return this.percentOfBases(that.dna, compare = true);
    },
    willLikelySurvive(goodBases = ['C', 'G']) {
      return this.percentOfBases(goodBases) >= 60;
    },
    get complementStrand() {
      let strand = [];
      for (let i of this.dna) {
        switch (i) {
          case 'A':
            strand.push('T');
            break;
          case 'T':
            strand.push('A');
            break;
          case 'C':
            strand.push('G');
            break;
          case 'G':
            strand.push('C');
            break;
          default:
            strand.push(i);
        }
      }
      return strand;
    }
  }
};

function mostRelated(pAequor) {
  let highMatch = 0;
  let highMatchI1 = -1;
  let highMatchI2 = -1;
  for (let i in pAequor) {
    for (let j in pAequor) {
      if (i === j) {
        continue;
      }
      let percent = pAequor[i].compareDNA(pAequor[j].dna, quiet = true);
      if (percent > highMatch) {
        highMatch = percent;
        highMatchI1 = i;
        highMatchI2 = j;
      }
    }
  }
  if (highMatch === 0) {
    console.log('No specimens matched');
    return null;
  }
  console.log(`The most related specimens are #${pAequor[highMatchI1].specimenNum} and #${pAequor[highMatchI2].specimenNum}, with a ${highMatch}% match`);
  console.log(`#${pAequor[highMatchI1].specimenNum}:\n${pAequor[highMatchI1].dna.join('')}`);
  console.log(`#${pAequor[highMatchI2].specimenNum}:\n${pAequor[highMatchI2].dna.join('')}`);
  return null;
}

function leastRelated(pAequor) {
  let highMatch = 0;
  let highMatchI1 = -1;
  let highMatchI2 = -1;
  for (let i in pAequor) {
    for (let j in pAequor) {
      if (i === j) {
        continue;
      }
      let percent = pAequor[i].compareDNA(pAequor[j], quiet = true) * -1 + 100;
      if (percent > highMatch) {
        highMatch = percent;
        highMatchI1 = i;
        highMatchI2 = j;
      }
    }
  }
  if (highMatch === 101) {
    console.log('No specimens were different');
    return null;
  }
  console.log(`The least related specimens are #${pAequor[highMatchI1].specimenNum} and #${pAequor[highMatchI2].specimenNum}, with a ${highMatch}% difference`);
  console.log(`#${pAequor[highMatchI1].specimenNum}:\n${pAequor[highMatchI1].dna.join('')}`);
  console.log(`#${pAequor[highMatchI2].specimenNum}:\n${pAequor[highMatchI2].dna.join('')}`);
  return null;
}

let specimenNum = 0;

let pAequor = [];

for (let i = 0; i < 30; i++) {
  specimenNum++;
  pAequor.push(pAequorFactory(specimenNum, mockUpStrand()));
}

/*
for (let i = 0; i < pAequor.length; i += 2) {
  if (pAequor[i].willLikelySurvive()) {
    console.log(`specimen #${pAequor[i].specimenNum} will likely survive`)
  } else {
    console.log(`specimen #${pAequor[i].specimenNum} will not likely survive`)
  }
  if (pAequor[i + 1].willLikelySurvive()) {
    console.log(`specimen #${pAequor[i + 1].specimenNum} will likely survive`)
  } else {
    console.log(`specimen #${pAequor[i + 1].specimenNum} will not likely survive`)
  }
  pAequor[i].compareDNA(pAequor[i + 1]);
  console.log();
}
*/

console.log('Sample specimen:');
console.log(pAequor[0].dna);
console.log();

mostRelated(pAequor);
leastRelated(pAequor);