const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    expect(shuffleArray).toEqual([
        { events: expect.any(Array), conversationState: 'ENDED' },
        false,
        undefined,
      ]);
      expect(shuffleArray[0].events).toHaveLength(9);

      expect(shuffleArray).toEqual(         
  expect.arrayContaining([      
    expect.objectContaining({   
      type: 'END'              
    })
  ])
)
   
})

/*check that shuffleArray returns an array

check that it returns an array of the same length as the argument sent in

check that all the same items are in the array

check that the items have been shuffled around*/

