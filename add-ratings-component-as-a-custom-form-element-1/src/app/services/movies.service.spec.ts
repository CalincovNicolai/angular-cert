import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {MoviesService} from './movies.service';
import {Movie} from '../model/movie.model';


describe("Movies Service", () => {

  const myFakeHttpClient = {
    get: () => of([
      {
        "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
        "title": "Harry Potter and the Philosopher's Stone",
        "duration": "152",
        "budget": "125",
        "release_date": "2001-11-04"
      }, {
        "id": "1e04ad42-c21f-40d3-9a7e-0a521980c192",
        "title": "Harry Potter and the Chamber of Secrets",
        "duration": "161",
        "budget": "125",
        "release_date": "2002-11-15"
      }
      ])
  }

  let service: MoviesService;

  beforeEach(() => {
    vi.useFakeTimers();
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: myFakeHttpClient}],
    });
    service = TestBed.inject(MoviesService);
 });

  it("should return all movies by default", async () => {
    let moviesReceived = [];
    service.filterMovieList().subscribe(movies => moviesReceived = movies);
    await vi.runAllTimersAsync();
    expect(moviesReceived.length).toBe(2);
  })

  it("should filter movies by title", async() => {
    let moviesReceived: Movie[] = [];
    service.filterMovieList("Cha").subscribe(movies => moviesReceived = movies);
    await vi.runAllTimersAsync();
    expect(moviesReceived.length).toBe(1);
    expect(moviesReceived[0].title).toEqual("Harry Potter and the Chamber of Secrets");
  })

  it("should filter movies by year", async() => {
    let moviesReceived: Movie[] = [];
    service.filterMovieList("", "2001").subscribe(movies => moviesReceived = movies);
    await vi.runAllTimersAsync();
    expect(moviesReceived.length).toBe(1);
    expect(moviesReceived[0].title).toEqual("Harry Potter and the Philosopher's Stone");
  })
})
