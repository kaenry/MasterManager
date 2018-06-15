import { Component, OnInit } from '@angular/core';

export class Node {
  children: FlatNode[];
  name: string;
}

export class FlatNode {
  name: string;
}

const TREE_DATA = `
{
  name: "DB",
  children: [
    {
      name: "MySQL"
    }
  ]
}
`;

@Component({
  selector: "left-bar",
  templateUrl: "./left-bar.component.html",
  styleUrls: ["./left-bar.component.css"]
})
export class LeftBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
