import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {CategoryCollectionService} from './category-collection.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  transtions: Array<any> = [
    {
      value: 0,
      label: 'Ingreso',
      operation: 'add'
    },
    {
      value: 1,
      label: 'Egreso',
      operation: 'diff'
    },
  ];
  categories$: Observable<any>;
  data: any = {};
  transObj: any = {};


  displayedColumns: string[] = ['name', 'type', 'actions'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private categoryCollection: CategoryCollectionService) {
    this.categories$ = this.categoryCollection.get();
    this.transObj = this.transtions.reduce((res, item) => {
      res[item.value] = item.label;
      return res;
    }, {});
  }

  ngOnInit() {
  }

  save() {
    if (this.data.id) {
      this.categoryCollection.update(this.data.id, this.data);
    } else {
      this.categoryCollection.add(this.data);
    }
    this.data = {};
  }

  editItem(data) {
    console.log(data);
    this.data = { ...data};
  }


}
