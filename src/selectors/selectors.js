export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function authorsWithCourseCount(authors, courses) {
  return authors.map(author => {
    let authorCourses = courses.filter(course => course.authorId == author.id);
    return Object.assign({}, author, { courseCount: authorCourses.length });
  });
}
