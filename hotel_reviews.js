function getHotels () {
  return [
    {
      id: 1,
      name: 'Novotel'
    },
    {
      id: 2,
      name: 'Sofitel'
    },
    {
      id: 3,
      name: 'Mandarin'
    },
    {
      id: 4,
      name: 'Marriott'
    },
    {
      id: 5,
      name: 'Waldorf Astoria'
    }
  ]
}

function getReviews () {
  return [
    {
      id: 1,
      hotelId: 1,
      rating: 2
    },
    {
      id: 2,
      hotelId: 1,
      rating: 5
    },
    {
      id: 3,
      hotelId: 1,
      rating: 3
    },
    {
      id: 4,
      hotelId: 2,
      rating: 3
    },
    {
      id: 5,
      hotelId: 2,
      rating: 4
    },
    {
      id: 6,
      hotelId: 2,
      rating: 5
    },
    {
      id: 7,
      hotelId: 3,
      rating: 3
    },
    {
      id: 8,
      hotelId: 3,
      rating: 1
    },
    {
      id: 9,
      hotelId: 3,
      rating: 4
    },
    {
      id: 10,
      hotelId: 3,
      rating: 4
    },
    {
      id: 11,
      hotelId: 4,
      rating: 2
    },
    {
      id: 12,
      hotelId: 4,
      rating: 5
    },
    {
      id: 13,
      hotelId: 4,
      rating: 5
    },
    {
      id: 14,
      hotelId: 4,
      rating: 4
    },
    {
      id: 15,
      hotelId: 4,
      rating: 5
    },
    {
      id: 16,
      hotelId: 5,
      rating: 4
    },
    {
      id: 17,
      hotelId: 5,
      rating: 5
    },
    {
      id: 18,
      hotelId: 5,
      rating: 4
    },
    {
      id: 19,
      hotelId: 5,
      rating: 5
    },
    {
      id: 20,
      hotelId: 5,
      rating: 4
    }
  ]
}

function getHotelsWithRating (score) {
  const hotels = getHotels().reduce((map, el) => {
    map[el.id] = el.name
    return map
  }, {})

  let count
  const ratings = getReviews().reduce((map, el) => {
    if (map[el.hotelId] === undefined) {
      count = 1
      map[el.hotelId] = {
        id: el.hotelId,
        name: hotels[el.hotelId],
        rating: el.rating
      }
    } else {
      map[el.hotelId].rating = (map[el.hotelId].rating * count + el.rating) / ++count
    }
    return map
  }, {})

  return Object.values(ratings)
        .filter(hotel => hotel.rating >= score)
        .sort((a, b) => a.rating < b.rating)
}

console.log(getHotelsWithRating(3))
