import { Component } from "@angular/core";
import { CustomNodeComponent } from "./custom-node.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  standalone: true,
  template: ``,
})
class TestCustomNodeComponent extends CustomNodeComponent { }

describe(('TestCustomNodeComponent'), () => {
  let component: TestCustomNodeComponent;
  let fixture: ComponentFixture<TestCustomNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestCustomNodeComponent],
    });

    fixture = TestBed.createComponent(TestCustomNodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // should create without DI errors
    expect(component).toBeTruthy();
  });
})
