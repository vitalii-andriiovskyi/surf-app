import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';


import { AjaxApiService } from './ajax-api.service';
// import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
import { AjaxApiMockService } from './ajax-api.mock.service';

import { PostItem } from '../../blog/post/post';
import {  BoardData,
          Dimention,
          BoardImage,
          TabsetDescription,
          TabsetImages,
          ActivatedTab,
          Tabset } from '../../surf-home/board-data';
import { boardData, teamData } from './ajax-api.mock-data';

import { Logger } from './logger.service';
import { TeamData } from '../../surf-home/surf-section-team/team-data';

const API_URL = environment.apiUrl;

describe('AjaxApiService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let ajaxApiService: AjaxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AjaxApiService,
        Logger
        // { provide: AjaxApiService, useClass: AjaxApiMockService }
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    ajaxApiService = TestBed.get(AjaxApiService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  // it('should be created', inject([AjaxApiService], (service: AjaxApiService) => {
  //   expect(service).toBeTruthy();
  // }));

  describe('#getPosts', () => {
    let expectedPosts: PostItem[];

    beforeEach(() => {
      ajaxApiService = TestBed.get(AjaxApiService);
      expectedPosts = [
        {
          id: 'post-1',
          title: 'Post 1',
          date: '',
          author: '****',
          body: `<p class="article-text">Hello</p>`,
          summary: '<p>This is</p>',
          category: 'City',
        },
        {
          id: 'post-2',
          title: 'Post 2',
          date: '',
          author: '****',
          body: `<p class="article-text">Hello</p>`,
          summary: '<p>This is</p>',
          category: 'City',
        }
      ] as PostItem[];

      it('should return expected posts (called) one', () => {

        ajaxApiService.getPosts().subscribe(
          posts => expect(posts).toEqual(expectedPosts, 'posts'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/posts`);
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedPosts);
      });

      it('should turn 404 into null', () => {

        ajaxApiService.getPosts().subscribe(
          posts => expect(posts).toEqual(null, 'should return empty heroes array'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/posts`);

        // respond with a 404 and the error message in the body
        const msg = 'deliberate 404 error';
        req.flush(msg, {status: 404, statusText: 'Not Found'});
      });
    });
  });

  // ***************************************************************

  describe('#getPost', () => {
    let expectedPost: PostItem;

    beforeEach(() => {
      ajaxApiService = TestBed.get(AjaxApiService);
      expectedPost = {
          id: 'post-1',
          title: 'Post 1',
          date: '',
          author: '****',
          body: `<p class="article-text">Hello</p>`,
          summary: '<p>This is</p>',
          category: 'City',
        } as PostItem;
      const postId = 'post-1';

      it('should return expected post (called) one', () => {

        ajaxApiService.getPost(postId).subscribe(
          post => expect(post).toEqual(expectedPost, 'post'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/post/${postId}`);
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedPost);
      });

      it('should turn 404 into null', () => {

        ajaxApiService.getPost(postId).subscribe(
          post => expect(post).toEqual(null, 'should return empty heroes array'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/post/${postId}`);

        // respond with a 404 and the error message in the body
        const msg = 'deliberate 404 error';
        req.flush(msg, {status: 404, statusText: 'Not Found'});
      });
    });
  });
  // ***************************************************************

  describe('#getBoardsData', () => {
    let expectedBoards: BoardData[];

    beforeEach(() => {
      ajaxApiService = TestBed.get(AjaxApiService);
      expectedBoards = boardData as BoardData[];

      it('should return expected boards (called) one', () => {

        ajaxApiService.getBoardsData().subscribe(
          boards => expect(boards).toEqual(expectedBoards, 'boards'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/boardItems`);
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedBoards);
      });

      it('should turn 404 into null', () => {

        ajaxApiService.getBoardsData().subscribe(
          boards => expect(boards).toEqual(null, 'should return empty heroes array'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/boardItems`);

        // respond with a 404 and the error message in the body
        const msg = 'deliberate 404 error';
        req.flush(msg, {status: 404, statusText: 'Not Found'});
      });
    });
  });

  // ***************************************************************

  describe('#getTeamData', () => {
    let expectedTeam: TeamData[];

    beforeEach(() => {
      ajaxApiService = TestBed.get(AjaxApiService);
      expectedTeam = teamData as TeamData[];

      it('should return expected team (called) one', () => {

        ajaxApiService.getTeamData().subscribe(
          team => expect(team).toEqual(expectedTeam, 'team'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/teamHome`);
        expect(req.request.method).toEqual('GET');

        // Respond with the mock heroes
        req.flush(expectedTeam);
      });

      it('should turn 404 into null', () => {

        ajaxApiService.getTeamData().subscribe(
          team => expect(team).toEqual(null, 'should return empty heroes array'),
          fail
        );

        const req = httpTestingController.expectOne(`${API_URL}/teamHome`);

        // respond with a 404 and the error message in the body
        const msg = 'deliberate 404 error';
        req.flush(msg, {status: 404, statusText: 'Not Found'});
      });
    });
  });

  // ***************************************************************

});
