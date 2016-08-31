var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
     {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};


// map()
function extractReviews(reviewData) {
  function reformat(item) {
    return {
      "id" : item.id,
      "title": item.attributes['review-title'],
      "stars": item.attributes.stars,
      "cost": item.attributes.cost
    };
  };

  var dataArray = reviewData.data;
  return dataArray.map(reformat);
}

// filter()
function findGoodReviews(reviewData) {
  var dataArray = reviewData.data;
  function filterByWord(item) {
    return item.attributes['review-title'].toLowerCase().indexOf('good') > -1;

  }

  return dataArray.filter(filterByWord);
}

// reduce()
function classifyReviewsByCost(reviews) {
  var dataArray = reviewData.data;
  var highN = 0, lowN = 0, lowAvgN = 0;
  var classificationResult = dataArray.reduce(function(newObj, item) {
    if(item.attributes['cost'] === 'high') {
      highN++;
    } else if(item.attributes['cost'] === 'average'){
      lowN++;
    } else {
      // low-average
      lowAvgN++;
    }

    newObj['high'] = highN;
    newObj['low'] = lowN;
    newObj['low-average'] = lowAvgN;

    return newObj;
  }, {})

  return classificationResult;
}

console.log(extractReviews(reviewsData));
console.log(findGoodReviews(reviewsData));
console.log(classifyReviewsByCost(reviewsData));
