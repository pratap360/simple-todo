import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
