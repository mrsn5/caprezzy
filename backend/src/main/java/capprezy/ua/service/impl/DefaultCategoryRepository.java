package capprezy.ua.service.impl;

import capprezy.ua.controller.exception.model.AlreadyExistsException;
import capprezy.ua.model.Category;
import capprezy.ua.repository.CategoryRepository;
import capprezy.ua.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("categoryService")
public class DefaultCategoryRepository implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category add(Category category) throws AlreadyExistsException {
        Category c = categoryRepository.findByNameIgnoreCase(category.getName());
        if (c == null) {
            return categoryRepository.save(category);
        } else {
            throw AlreadyExistsException.createWith("This category is already existed: " + c.getName());
        }
    }
}
