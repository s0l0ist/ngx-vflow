import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { Vflow, VflowComponent } from 'ngx-vflow';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VflowMockComponent } from '../../testing-utils/component-mocks/vflow-mock.component';

@Component({
  template: `
    <vflow
      #vflow
      [nodes]="[]"
      [edges]="[]"
      [view]="'auto'"
      [minZoom]="0"
      [maxZoom]="0"
      [background]="'#fff'"
      [optimization]="{ detachedGroupsLayer: true }"
      [entitiesSelectable]="true"
      [keyboardShortcuts]="{ multiSelection: null }"
      [connection]="{}"
      (onComponentNodeEvent)="(null)" />
  `,
  standalone: true,
  imports: [Vflow],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class VflowWrapperComponent {
  public vflow = viewChild<VflowComponent>('vflow');

  callViewChildApis() {
    try {
      this.vflow()!.viewport();

      this.vflow()!.nodesChange();

      this.vflow()!.edgesChange();

      this.vflow()!.viewportChange$.subscribe();

      this.vflow()!.nodesChange$.subscribe();

      this.vflow()!.edgesChange$.subscribe();

      this.vflow()!.viewportTo({
        x: 0,
        y: 0,
        zoom: 1,
      });

      this.vflow()!.zoomTo(1);

      this.vflow()!.panTo({
        x: 0,
        y: 0,
      });

      this.vflow()!.fitView();

      this.vflow()!.documentPointToFlowPoint({
        x: 0,
        y: 0,
      });

      this.vflow()!.getNode('1');

      this.vflow()!.getDetachedEdges();

      return true;
    } catch {
      return false;
    }
  }
}

describe('VflowMockComponent', () => {
  let fixture: ComponentFixture<VflowWrapperComponent>;
  let component: VflowWrapperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VflowWrapperComponent],
    })
      .overrideComponent(VflowWrapperComponent, {
        remove: {
          imports: [Vflow],
        },
        add: {
          imports: [VflowMockComponent],
        },
      })
      .compileComponents();
    fixture = TestBed.createComponent(VflowWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should successfully create mock vflow component and run all view child apis', () => {
    expect(component).toBeTruthy();
    expect(component.callViewChildApis()).toBeTrue();
  });
});
