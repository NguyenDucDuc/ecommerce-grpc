import { Observable } from 'rxjs';
import { CreateCategoryDto } from '../dtos/category-service';

export const CategoryPackageName = 'category';
export const CategoryServiceName = 'CategoryService';

export interface CategoryServiceClient {
  createCategory(request: CreateCategoryDto): Observable<any>;
}
