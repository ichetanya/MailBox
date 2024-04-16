import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
})
export class FolderComponent implements OnInit, OnDestroy {
  folderName: string;
  private destroy = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  /**
   * Fetches the folder name from the active route.
   */
  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy)
    ).subscribe(params => {
      this.folderName = params.get('folderName') ?? '';
    });
  }

  /**
   * Unsubscribes from the paraMap Observable. 
   */
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
